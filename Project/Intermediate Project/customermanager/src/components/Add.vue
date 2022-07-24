<template>
  <!-- <div class="" id="addContainer">

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
  </div> -->

  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Add Customer</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>Customer Info</h4>
        <div class="form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="First Name"
            v-model="customer.first_name"
          />
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            v-model="customer.last_name"
          />
        </div>
      </div>
      <div class="well">
        <h4>Customer Contact</h4>
        <div class="form-group">
          <label>Email</label>
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            v-model="customer.email"
          />
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input
            type="text"
            class="form-control"
            placeholder="Phone"
            v-model="customer.phone"
          />
        </div>
      </div>

      <div class="well">
        <h4>Customer Location</h4>
        <div class="form-group">
          <label>Address</label>
          <input
            type="text"
            class="form-control"
            placeholder="Address"
            v-model="customer.address"
          />
        </div>
        <div class="form-group">
          <label>City</label>
          <input
            type="text"
            class="form-control"
            placeholder="City"
            v-model="customer.city"
          />
        </div>
        <div class="form-group">
          <label>State</label>
          <input
            type="text"
            class="form-control"
            placeholder="State"
            v-model="customer.state"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import alert from "./Alert.vue";
export default {
  name: "add",
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
    alert,
    Alert,
  },
};
</script>

<style lang="scss" scoped>
</style>