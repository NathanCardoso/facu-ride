<template>
  <div>
    <div class="container">
      <TitlePage content="Cadastrar Veículo" />
    </div>
    <form class="register">
      <div class="container">
        <div class="wrapper">
          <div class="wrapper-input">
            <InputData
              inputBackground="light"
              inputId="driver"
              inputLabel="Motorista"
              inputType="text"
              inputName="motorista"
              inputPlaceholder="Digite o nome do aluno"
              class="input-data"
              @inputValue="receiveInput"
            />
            <!-- <InputData
              inputBackground="light"
							inputId="cnh"
              inputLabel="CNH"
              inputType="text"
              inputName="cnh"
              inputPlaceholder="Digite aqui o número da CNH"
              class="input-data"
							@inputValue="receiveInput"
            /> -->
            <InputData
              inputBackground="light"
              inputId="model"
              inputLabel="Modelo"
              inputType="text"
              inputName="modelo"
              inputPlaceholder="Digite aqui o modelo do carro"
              class="input-data"
              @inputValue="receiveInput"
            />
            <InputData
              inputBackground="light"
              inputId="year"
              inputLabel="Ano"
              inputType="text"
              inputName="ano"
              inputPlaceholder="2022"
              class="input-data"
              @inputValue="receiveInput"
            />
            <InputData
              inputBackground="light"
              inputId="color"
              inputLabel="Cor"
              inputType="text"
              inputName="cor"
              inputPlaceholder="Digite a cor do veículo"
              class="input-data"
              @inputValue="receiveInput"
            />
          </div>
          <div class="wrapper-button">
            <ButtonReturn @goBack="routeReturn" layout="light" />
            <ButtonSubmit
              content="Criar Veículo"
              background="light"
              @click.prevent="createCar(carAddedObject)"
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
      carAddedObject: {},
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
  methods: {
    routeReturn() {
      this.$router.push("/");
    },
    receiveInput({ name, value }) {
      this.carAddedObject[name] = value;
    },
    createCar() {
      const newCarroRef = firebase.database().ref("carros").push();
      const newCarroKey = newCarroRef.key;
      let updates = {};
      updates["/carros/" + newCarroKey] = this.carAddedObject;
      firebase
        .database()
        .ref()
        .update(updates)
        .then(() => {
          this.alertNotification = true;
          this.typeAlertNotification = "success";
          this.titleAlertNotification = "Sucesso!";
          this.paragraphAlertNotification = "Carro adicionado.";

          setTimeout(() => {
            this.alertNotification = false;
          }, 3000);
        })
        .catch((error) => {
          this.alertNotification = true;
          this.typeAlertNotification = "error";
          this.titleAlertNotification = "Erro!";
          this.paragraphAlertNotification = "O carro não foi adicionado.";

          setTimeout(() => {
            this.alertNotification = false;
          }, 3000);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  margin-top: rem(36);
  display: flex;
  justify-content: center;
  background: $blueDark;
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
