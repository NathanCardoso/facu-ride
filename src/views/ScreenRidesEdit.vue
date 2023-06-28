<template>
  <div>
    <div class="container">
      <TitlePage content="Editar Carona" />
    </div>
    <form class="register">
      <div class="container">
        <div class="wrapper">
          <div class="wrapper-input">
            <InputData
              inputBackground="dark"
              inputId="name"
              inputLabel="Nome"
              inputType="text"
              inputName="motorista"
              inputPlaceholder="Digite aqui seu nome"
              class="input-data"
              :inputValue="ridesEditObject.motorista"
              @inputValue="receiveInput"
            />
            <InputData
              inputBackground="dark"
              inputId="place-departure"
              inputLabel="Local de Partida"
              inputType="text"
              inputName="localPartida"
              inputPlaceholder="Inserir Local de Partida"
              class="input-data"
              :inputValue="ridesEditObject.localPartida"
              @inputValue="receiveInput"
            />
            <InputData
              inputBackground="dark"
              inputId="destination"
              inputLabel="Local de Destino"
              inputType="text"
              inputName="localDestino"
              inputPlaceholder="Inserir Local de Destino"
              class="input-data"
              :inputValue="ridesEditObject.localDestino"
              @inputValue="receiveInput"
            />
            <InputData
              inputBackground="dark"
              inputId="departure-time"
              inputLabel="Horario de Saída"
              inputType="text"
              inputName="horarioSaida"
              inputPlaceholder="Inserir horário de saída"
              class="input-data"
              :inputValue="ridesEditObject.horarioSaida"
              @inputValue="receiveInput"
            />
          </div>
          <div class="wrapper-button">
            <ButtonReturn @goBack="routeReturn" layout="dark" />
            <ButtonSubmit
              content="Editar Carona"
              background="dark"
              @click.prevent="rideEdit(ridesAddObject)"
            />
          </div>
        </div>
      </div>
    </form>
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
import InputData from "../components/atoms/InputData.vue";
import ButtonSubmit from "../components/atoms/ButtonSubmit.vue";
import ButtonReturn from "../components/atoms/ButtonReturn.vue";
import NotificationRequest from "../components/atoms/NotificationRequest.vue";

export default {
  name: "ScreenRidesAdd",
  data() {
    return {
      ridesEditObject: {
        motorista: "",
        localDestino: "",
        localPartida: "",
        horarioSaida: "",
      },
      typeAlertNotification: "",
      titleAlertNotification: "",
      paragraphAlertNotification: "",
      alertNotification: false,
    };
  },
  components: {
    TitlePage,
    InputData,
    ButtonSubmit,
    ButtonReturn,
    NotificationRequest,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    routeReturn() {
      this.$router.push("/screen-ride-list");
    },
    receiveInput({ name, value }) {
      this.ridesEditObject[name] = value;
    },
    rideEdit() {
      const rideRef = firebase.database().ref(`caronas/${this.id}`);
      rideRef
        .update(this.ridesEditObject)
        .then(() => {
          this.alertNotification = true;
          this.typeAlertNotification = "success";
          this.titleAlertNotification = "Sucesso!";
          this.paragraphAlertNotification = "Carona atualizada.";

          setTimeout(() => {
            this.alertNotification = false;
          }, 3000);
        })
        .catch(() => {
          this.alertNotification = true;
          this.typeAlertNotification = "error";
          this.titleAlertNotification = "Erro!";
          this.paragraphAlertNotification = "Não foi possível atualizar a carona.";

          setTimeout(() => {
            this.alertNotification = false;
          }, 3000);
        });
    },
  },
  created() {
    const ridesRef = firebase.database().ref(`caronas/${this.id}`);
    ridesRef.on("value", (snapshot) => {
      const ride = snapshot.val();

      this.ridesEditObject.motorista = ride.motorista;
      this.ridesEditObject.localDestino = ride.localDestino;
      this.ridesEditObject.localPartida = ride.localPartida;
      this.ridesEditObject.horarioSaida = ride.horarioSaida;
    });
  },
};
</script>

<style lang="scss" scoped>
.register {
  margin-top: rem(36);
  display: flex;
  justify-content: center;
  background: $pink;
  height: 100vh;
  position: relative;

  .button {
    position: absolute;
    top: -5%;
    left: 50%;
    transform: translateX(-50%);
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -50%;
    height: 100vh;
    gap: rem(42);

    .wrapper-input {
      .input-data {
        + .input-data {
          margin-top: rem(12);
        }
      }
    }

    .wrapper-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      gap: rem(8);
    }
  }
}
</style>
