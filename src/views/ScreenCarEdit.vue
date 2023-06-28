<template>
  <div>
    <div class="container">
      <TitlePage content="Editar Veículo" />
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
              :inputValue="carEditObject.motorista"
              class="input-data"
              @inputValue="receiveInput"
            />
            <InputData
              inputBackground="light"
              inputId="model"
              inputLabel="Modelo"
              inputType="text"
              inputName="modelo"
              inputPlaceholder="Digite aqui o modelo do carro"
              :inputValue="carEditObject.modelo"
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
              :inputValue="carEditObject.ano"
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
              :inputValue="carEditObject.cor"
              class="input-data"
              @inputValue="receiveInput"
            />
          </div>
          <div class="wrapper-button">
            <ButtonReturn @goBack="routeReturn" layout="light" />
            <ButtonSubmit
              content="Editar Veículo"
              background="light"
              @click.prevent="editCar(carEditObject)"
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
import NotificationRequest from "../components/atoms/NotificationRequest.vue"

export default {
  name: "ScreenCarEdit",
  data() {
    return {
      carEditObject: {
        motorista: "",
        cor: "",
        ano: "",
        modelo: "",
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
		NotificationRequest
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    routeReturn() {
      this.$router.push("/screen-car-list");
    },
    receiveInput({ name, value }) {
      this.carEditObject[name] = value;
    },
    editCar() {
      const carRef = firebase.database().ref(`carros/${this.id}`);
      carRef
        .update(this.carEditObject)
        .then(() => {
          this.alertNotification = true;
          this.typeAlertNotification = "success";
          this.titleAlertNotification = "Sucesso!";
          this.paragraphAlertNotification = "Carro atualizado.";

          setTimeout(() => {
            this.alertNotification = false;
          }, 3000);
        })
        .catch(() => {
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
  created() {
    const carRef = firebase.database().ref(`carros/${this.id}`);
    carRef.on("value", (snapshot) => {
      const car = snapshot.val();

      this.carEditObject.motorista = car.motorista;
      this.carEditObject.cor = car.cor;
      this.carEditObject.ano = car.ano;
      this.carEditObject.modelo = car.modelo;
    });
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
      gap: rem(16);
      flex-wrap: wrap;
    }
  }
}
</style>
