<template>
  <div>
    <h3>Dashboard</h3>
    <!-- testing -->
    <!-- 
    <p class="red green--text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos cupiditate optio reprehenderit tempore laborum. Incidunt dignissimos accusantium cum tempore dolore? Illo, vero ad! Quod illo voluptate minus repellendus quo ad.
    </p>
    <p class="pink lighten-4 red--text text--darken-4">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos cupiditate optio reprehenderit tempore laborum. Incidunt dignissimos accusantium cum tempore dolore? Illo, vero ad! Quod illo voluptate minus repellendus quo ad.
    </p>
    <h1 class = "display-4">Hello Testing</h1>
    <h3 class = "display-1">Hello Display 1</h3>
    <p class = "headline">Hello headline</p>
    <p class = "subtitle-1 font-weight-bold">Hello Testing</p>
    <p class = "subtitle-2">Hello Testing</p>
    <p class = "capton">Caption</p>
    <v-btn class="pink white--text">Submit</v-btn>
    <v-btn depressed class="pink">Submit1</v-btn>
    <v-btn text color="green">Submit</v-btn>

    <v-btn depressed color="pink white--text">
    <v-icon>mdi-email</v-icon>
    <span>Email me</span>
    </v-btn>

    <v-btn depressed small color="pink white--text">
    <v-icon>mdi-email</v-icon>
    <span>Email me</span>
    </v-btn>

    <v-btn depressed large color="pink white--text">
    
    <span>Email me</span>
    <v-icon right large>mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
    <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
     <v-btn class="hidden-md-and-down">Click Me</v-btn>
    <v-btn class="hidden-md-and-up">Click Me</v-btn> -->

    <!-- nav -->
    <!-- <v-container class="my-5"> -->
      <!-- <v-layout row>
        <v-flex xs12 md6>
          <v-btn outlined  block color="indigo">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined  block color="indigo">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined  block color="indigo">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined  block color="indigo">1</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-space-around>
        <v-flex xs4 md3>
          <v-btn outlined  block color="light-green">1</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outlined  block color="light-green">1</v-btn>
        </v-flex>
      </v-layout> -->
    <v-container class="my-5">
      <v-card text v-for="project in projects" :key='project.title' class="pa-3">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text"> Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div v-bind:class="project.status == 'complete' ? 'caption green--text' : 'caption black--text'">{{ project.status }}</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Dashboard',
  components: {
  },
  data() {
    return {
      projects: [
        { title: 'Design New Website', person: 'Jame', due: '1st Jan 2019', status: 'ongoing'},
        { title: 'Design New UI', person: 'Will', due: '1st May 2019', status: 'complete'},
        { title: 'Code up Home Page', person: 'Jon', due: '1st Jan 2020', status: 'ondue'},
        { title: 'UI/UX', person: 'Marry', due: '1st Jan 2018', status: 'complete'},
      ]
    }
  }
}
</script>

<style scope>
  .project.ongoing{
    border-left: 4px solid orange;
  }

  .project.complete{
    border-left: 4px solid #3cd1c2;
  }

  .project.ondue{
    border-left: 4px solid tomato;
  }
</style>
