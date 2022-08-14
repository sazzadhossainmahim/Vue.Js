<template>
  <div class="addContainer" id="addContainer">

    <Alert />
    <h1 id="pageHeader" class="">Add Customer</h1>
    <form action="">
      <div id="well" class="">
        <div id="form-group" class="">
          <label for="">First Name</label>
          <input type="text" name="" id="" placeholder="First Name" />
        </div>
        <div id="formGroup">
          <label for="">Last Name</label>
          <input type="text" name="" id="" placeholder="Last Name" />
        </div>
      </div>
      <div id="well" class="">
        <h4>Customer Contact</h4>
        <div id="formGroup">
          <label for="">Email</label>
          <input type="text" name="" id="" />
        </div>
        <div class="formG">
          <label for="">Phone</label>
          <input type="tel" name="" placeholder="Enter Phone" id="" />
        </div>
      </div>

      <div id="well" class="">
        <h4>Customer Location</h4>
        <div id="formGroup" class="">
          <label for="">Address</label>
          <input type="tel" name="" placeholder="Enter Location" id="" />
        </div>
        <div id="formGroup" class="">
          <label for="">City</label>
          <input type="tel" name="" placeholder="Enter City" id="" />
        </div>
        <div id="formGroup" class="">
          <label for="">State</label>
          <input type="tel" name="" placeholder="Enter State" id="" />
        </div>
      </div>
      <button type="submit" class="">Submit</button>
    </form>
  </div>

</template>

<script>
import AlertVue from './Alert.vue';

export default {
  name: "AddVue",
  data() {
    return {
      customer: {},
      alert: "",
    };
  },
  methods: {
    addCustomer(e) {
      if (
        !this.customer.first_name ||
        !this.customer.last_name ||
        !this.customer.email
      ) {
        this.alert = "Please fill in all required fields";
      } else {
        let newCustomer = {
          first_name: this.customer.first_name,
          last_name: this.customer.last_name,
          phone: this.customer.phone,
          email: this.customer.email,
          address: this.customer.address,
          city: this.customer.city,
          state: this.customer.state,
        };

        this.$http
          .post("http://slimapp/api/customer/add", newCustomer)
          .then(function (response) {
            this.$router.push({
              path: "/",
              query: { alert: "Customer Added" },
            });
          });

        e.preventDefault();
      }
      e.preventDefault();
    },
  },
  components: {
    AlertVue,

  },
};
</script>

<style lang="scss" scoped>
</style>