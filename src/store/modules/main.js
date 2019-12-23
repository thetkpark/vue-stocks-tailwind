import axiosData from "../../axios/axios";
import router from "../../router";

const state = {
  token: null,
  user: null,
  funds: null,
  stocks: [],
  myStocks: [],
  ch: false
};

const mutations = {
  authUser(state, token) {
    state.token = token;
  },
  storeUser(state, user) {
    state.user = user;
  },
  clearAuth(state) {
    state.token = null;
    state.user = null;
    state.funds = null;
  },
  setStocks(state, stocks) {
    state.stocks = stocks;
  },
  setMyStocks(state, stocks) {
    state.myStocks = stocks;
  },
  updatedStock(state, stockOrder) {
    state.funds = stockOrder.funds;
    state.myStocks = stockOrder.stocks;
  },
  chStocks(state) {
    state.ch = true;
  }
};

const actions = {
  async signup({ commit }, authData) {
    const res = await axiosData.post("/api/signup", {
      email: authData.email,
      password: authData.password
    });
    const token = res.headers.token;
    localStorage.setItem("token", token);
    commit("authUser", token);
    const user = res.data;
    commit("storeUser", user);
    state.funds = res.data.funds;
    const now = new Date();
    const expireDate = new Date(now.getTime() + 36000000);
    localStorage.setItem("expireDate", expireDate);
    router.replace("/");
  },
  async signin({ commit }, authData) {
    const res = await axiosData.post("/api/signin", {
      email: authData.email,
      password: authData.password
    });
    const token = res.headers.token;
    localStorage.setItem("token", token);
    commit("authUser", token);
    const user = res.data;
    commit("storeUser", user);
    state.funds = res.data.funds;
    const now = new Date();
    const expireDate = new Date(now.getTime() + 36000000);
    localStorage.setItem("expireDate", expireDate);
    router.replace("/");
  },
  logout({ commit }) {
    commit("clearAuth");
    localStorage.removeItem("expireDate");
    localStorage.removeItem("token");
    router.replace("/signin");
  },
  autoLogin({ commit, dispatch }) {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch("logout");
      return;
    }
    const exp = localStorage.getItem("expireDate");
    const expireDate = new Date(exp);
    const now = new Date();
    if (now >= expireDate) {
      dispatch("logout");
      return;
    }
    commit("authUser", token);
    dispatch("fetchUser");
  },
  async fetchUser({ state, dispatch }) {
    if (!state.token) {
      return;
    }
    const token = localStorage.getItem("token");
    const { data } = await axiosData.get("/api/user", {
      headers: {
        token
      }
    });
    state.user = data;
    state.funds = data.funds;
    dispatch("initMyStocks");
  },
  async initStocks({ commit }) {
    const token = localStorage.getItem("token");
    const { data } = await axiosData.get("/api/allstocks", {
      headers: { token }
    });
    commit("setStocks", data);
  },
  async initMyStocks({ commit }) {
    const token = localStorage.getItem("token");
    const { data } = await axiosData.get("/api/user", { headers: { token } });
    const stocks = data.stocks;
    console.log(JSON.stringify(stocks));
    stocks.forEach(el => {
      // console.log(JSON.stringify(el.quantity));
      console.log(typeof el.quantity);
      if (el.quantity > 0) {
        console.log("MORE");
        commit("chStocks");
        console.log(state.ch);
      }
    });
    commit("setMyStocks", stocks);
  },
  async buyStock({ commit }, order) {
    const token = localStorage.getItem("token");
    const { data } = await axiosData.post(
      "/api/user/stock",
      {
        stockID: order.id,
        quantity: order.quantity
      },
      {
        headers: { token }
      }
    );
    const stockOrder = {
      funds: data.funds,
      stocks: data.stocks
    };
    commit("updatedStock", stockOrder);
  },
  async sellStock({ commit }, order) {
    const token = localStorage.getItem("token");
    const { data } = await axiosData.put(
      "/api/user/stock",
      {
        stockID: order.id,
        quantity: order.quantity
      },
      {
        headers: { token }
      }
    );
    const stockOrder = {
      funds: data.funds,
      stocks: data.stocks
    };
    commit("updatedStock", stockOrder);
  },
  rndStock({ state }) {
    const token = localStorage.getItem("token");
    axiosData.put("/api/stock", {}, { headers: { token } }).then(res => {
      const myStocks = res.data;
      const stocks = res.data;
      const globalStocks = [];
      stocks.forEach(st => {
        globalStocks.push(st.stock);
      });
      state.stocks = globalStocks;
      state.myStocks = myStocks;
    });
  }
};

const getters = {
  user(state) {
    return state.user;
  },
  isAuth(state) {
    return state.token != null;
  },
  token(state) {
    return state.token;
  },
  funds(state) {
    return state.funds;
  },
  stocks(state) {
    return state.stocks;
  },
  myStocks(state) {
    return state.myStocks;
  },
  ch(state) {
    return state.ch;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
