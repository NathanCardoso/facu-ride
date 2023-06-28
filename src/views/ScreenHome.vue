<template>
  <div>
    <div class="container">
      <TitleHome content="FacuRide" />
    </div>
    <section class="section-home">
      <div class="container">
        <TitleSection content="Menu" />
        <ul class="menu-list">
          <li class="list-item" v-for="(item, index) in MenuCardArray" :key="index">
            <MenuCard
              :contentParagraph="item.paragraph"
              :pathImage="item.image"
              :altImage="item.imageAlt"
              :background="item.background"
              @click="handleClick(item.router)"
            />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import TitleHome from "../components/atoms/TitleHome.vue";
import TitleSection from "../components/atoms/TitleSection.vue";
import MenuCard from "../components/molecules/MenuCard.vue";
import RideList from "../assets/images/png/rides-list.png";
import RideAdd from "../assets/images/png/rides-add.png";
import DriverRegister from "../assets/images/png/driver-register.png";
import VehicleRegister from "../assets/images/png/vehicle-register.png";

export default {
  name: "ScreenHome",
  components: {
    TitleHome,
    TitleSection,
    MenuCard,
  },
  data() {
    return {
      MenuCardArray: [
        {
          paragraph: "Lista de Caronas",
          image: RideList,
          imageAlt: "Ride List",
          background: "green",
          router: "/screen-ride-list",
        },
        {
          paragraph: "Adicionar Carona",
          image: RideAdd,
          imageAlt: "Ride Add",
          background: "pink",
          router: "screen-ride-add",
        },
        {
          paragraph: "Lista de Carros",
          image: DriverRegister,
          imageAlt: "Driver Register",
          background: "blue-dark",
          router: "screen-car-list",
        },
        {
          paragraph: "Cadastrar Veículo",
          image: VehicleRegister,
          imageAlt: "Vehicle Register",
          background: "green-dark",
          router: "screen-vehicle-add",
        },
      ],
    };
  },
  methods: {
    handleClick(router) {
      this.$router.push(router);
    },
  },
};
</script>

<style lang="scss" scoped>
.section-home {
  margin-top: rem(32);
  padding: rem(32) 0;
  border-top: 2px solid $grayLight;

  .menu-list {
    margin-top: rem(32);

    .list-item {
      + .list-item {
        margin-top: rem(24);
      }
    }
  }
}
</style>
