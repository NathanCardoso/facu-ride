<template>
  <div>
    <div class="container">
      <TitlePage content="Seus Carros" />
    </div>
    <div class="wrapper">
      <ul class="list-car">
        <li class="item-car" v-for="(information, id) in informationData" :key="id">
          <div class="container">
            <RideCard
              :dataInformation="information"
              @clicked="carEdit(id)"
              @clickedDelete="carDelete(id)"
            />
          </div>
        </li>
      </ul>
      <div class="wrapper-button">
        <ButtonReturn @goBack="routeReturn" layout="light" />
      </div>
    </div>
    <NotificationRequest
      :typeNotification="typeAlertNotification"
      :title="titleAlertNotification"
      :paragraph="paragraphAlertNotification"
      v-if="alertNotification"
    />
  </div>
</template>

<script>
import TitlePage from "../components/atoms/TitlePage.vue";
import RideCard from "../components/molecules/RideCard.vue";
import ButtonSubmit from "../components/atoms/ButtonSubmit.vue";
import ButtonReturn from "../components/atoms/ButtonReturn.vue";
import NotificationRequest from "../components/atoms/NotificationRequest.vue";

export default {
  name: "ScreenRidesList",
  data() {
    return {
      informationData: [],
      typeAlertNotification: "",
      titleAlertNotification: "",
      paragraphAlertNotification: "",
      alertNotification: false,
    };
  },
  components: {
    TitlePage,
    RideCard,
    ButtonSubmit,
    ButtonReturn,
    NotificationRequest,
  },
  methods: {
    routeReturn() {
      this.$router.push("/");
    },
    carEdit(id) {
      this.$router.push(`/screen-car-edit/${id}`);
    },
    carDelete(id) {
      const carRef = firebase.database().ref(`carros/${id}`);
      carRef
        .remove()
        .then(() => {
          this.alertNotification = true;
          this.typeAlertNotification = "success";
          this.titleAlertNotification = "Sucesso!";
          this.paragraphAlertNotification = "Carro excluído.";

          setTimeout(() => {
            this.alertNotification = false;
          }, 3000);
        })
        .catch(() => {
          this.alertNotification = true;
          this.typeAlertNotification = "error";
          this.titleAlertNotification = "Erro!";
          this.paragraphAlertNotification = "Não foi possível excluir o carro.";

          setTimeout(() => {
            this.alertNotification = false;
          }, 3000);
        });
    },
  },
  created() {
    const carRef = firebase.database().ref("carros");
    carRef.on("value", (snapshot) => {
      const car = snapshot.val();
      this.informationData = car;
    });
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  background: $greenDark;

  .list-car {
    padding: rem(36) 0;
    margin-top: rem(24);

    .item-car {
      + .item-car {
        margin-top: rem(16);
      }
    }
  }

  .wrapper-button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: rem(60);

    .button-return {
      width: rem(177);
      height: rem(37);
      border: none;
      border-radius: rem(8);
      background: $white;
      color: $blueDark;
    }
  }
}
</style>
