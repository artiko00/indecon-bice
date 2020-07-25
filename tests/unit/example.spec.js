import { shallowMount } from "@vue/test-utils";
import Dashboard from "@/components/Dashboard.vue";

describe("Componente Dashboard", () => {
  it("Inyeccion de valores", () => {
    const data = {
      cobre: {
        key: "cobre",
        name: "Precio del Cobre, dólares por libra",
        unit: "dolar",
        date: 1584489600,
        value: 2.39
      },
      dolar: {
        key: "dolar",
        name: "Dólar observado",
        unit: "pesos",
        date: 1584489600,
        value: 855.09
      },
      euro: {
        key: "euro",
        name: "Euro",
        unit: "pesos",
        date: 1584489600,
        value: 938.42
      },
      ipc: {
        key: "ipc",
        name: "Indice de Precios al Consumidor (Var. c/r al período anterior)",
        unit: "porcentual",
        date: 1577836800,
        value: 1.1
      },
      ivp: {
        key: "ivp",
        name: "Indice de valor promedio",
        unit: "pesos",
        date: 1586390400,
        value: 29706.22
      },
      oro: {
        key: "oro",
        name: "Precio del Oro, dólares por onza",
        unit: "dolar",
        date: 1584576000,
        value: 1473.2
      },
      plata: {
        key: "plata",
        name: "Precio de la Plata, dólares por onza",
        unit: "dolar",
        date: 1584576000,
        value: 11.69
      },
      uf: {
        key: "uf",
        name: "Unidad de fomento",
        unit: "pesos",
        date: 1586390400,
        value: 28630.63
      },
      utm: {
        key: "utm",
        name: "Unidad tributaria mensual",
        unit: "pesos",
        date: 1583020800,
        value: 50021
      },
      yen: {
        key: "yen",
        name: "Yen",
        unit: "dolar",
        date: 1584489600,
        value: 107.33
      }
    };
    const wrapper = shallowMount(Dashboard, {
      propsData: {
        indecon: data
      }
    });
    expect(wrapper.vm.$props.indecon).toBe(data);
  });
});
