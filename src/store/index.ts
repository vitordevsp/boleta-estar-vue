import { createStore } from "vuex"
import type { IStore } from "@/types/store"
import type { IOrder, IOrderSubmit } from "@/types/order"

const LOCAL_ORDERS = "boleta-estar-vue:orders"

export const appStore = createStore<IStore>({
  state() {
    try {
      const localStorageOrders = localStorage.getItem(LOCAL_ORDERS) || "[]"

      const arrayOrders = JSON.parse(localStorageOrders)

      const store: IStore = {
        orders: arrayOrders,
      }

      return store
    } catch {
      const store: IStore = {
        orders: [],
      }

      return store
    }
  },

  mutations: {
    pushOrder(state, order: IOrder) {
      state.orders.push(order)
      localStorage.setItem(LOCAL_ORDERS, JSON.stringify(state.orders))
    },
  },

  actions: {
    sendOrder(state, payload: IOrderSubmit) {
      const newOrder = {
        id: String(Date.now()),
        ...payload,
      }

      this.commit("pushOrder", newOrder)
    }
  },
})
