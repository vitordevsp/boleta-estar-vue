import { createStore } from "vuex"
import type { IStore } from "@/types/store"
import type { IOrder, IOrderSubmit } from "@/types/order"

export const appStore = createStore<IStore>({
  state() {
    const store: IStore = {
      orders: [],
    }
    return store
  },

  mutations: {
    pushOrder(state, order: IOrder) {
      state.orders.push(order)
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
  }
})
