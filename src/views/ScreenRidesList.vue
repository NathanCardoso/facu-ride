<template>
  <div>
    <div class="container">
      <TitlePage content="Escolha a sua carona" />
    </div>
    <div class="wrapper">
      <ul class="list-ride">
        <li class="item-ride" v-for="(information, id) in informationData" :key="id">
          <div class="container">
            <RideCard
              :dataInformation="information"
              @clicked="rideEdit(id)"
              @clickedDelete="rideDelete(id)"
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
    ButtonReturn,
    NotificationRequest,
  },
  methods: {
    routeReturn() {
      this.$router.push("/");
    },
    rideEdit(id) {
      this.$router.push(`/screen-ride-edit/${id}`);
    },
    rideDelete(id) {
      const carRef = firebase.database().ref(`caronas/${id}`);
      carRef
        .remove()
        .then(() => {
          this.alertNotification = true;
          this.typeAlertNotification = "success";
          this.titleAlertNotification = "Sucesso!";
          this.paragraphAlertNotification = "Carona excluída.";

          setTimeout(() => {
            this.alertNotification = false;
          }, 3000);
        })
        .catch(() => {
          this.alertNotification = true;
          this.typeAlertNotification = "error";
          this.titleAlertNotification = "Erro!";
          this.paragraphAlertNotification = "Não foi possível excluir a carona.";

          setTimeout(() => {
            this.alertNotification = false;
          }, 3000);
        });
    },
  },
  created() {
    const caronasRef = firebase.database().ref("caronas");
    caronasRef.on("value", (snapshot) => {
      const caronas = snapshot.val();
      this.informationData = caronas;
    });
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  background: $green;

  .list-ride {
    padding: rem(36) 0;
    margin-top: rem(24);

    .item-ride {
      + .item-ride {
        margin-top: rem(16);
      }
    }
  }

  .wrapper-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: rem(60);
  }
}
</style>
