<template>
  <q-page class="">
    <section class="banner-img"></section>

    <section class="content">
      <section class="github-repo q-pa-md row bg-white q-mb-md">
        <section class="user-info-block q-px-lg col-12">
          <div class="user-photo-name row items-end">
            <q-avatar rounded size="250px" class="q-mr-lg">
              <q-img :src="myInfo['avatar_url']" native-context-menu>
                <div class="absolute-bottom text-subtitle1 text-center">
                  {{ myInfo["name"] }}
                </div>
              </q-img>
            </q-avatar>
            <div
              class="text-h4 .about-mina"
            >
              {{ myInfo["login"] }}
              <div class="row">
                <q-btn
                  flat
                  round
                  color="primary"
                  icon="home"
                  size="lg"
                  type="a"
                  :href="myInfo['html_url']"
                />
                <q-btn
                  flat
                  round
                  color="primary"
                  icon="link"
                  size="lg"
                  type="a"
                  :href="myInfo['blog']"
                />
              </div>
              <div class="text-h6 text-grey ">
                Hi I'm Mina , There is my github repositories.
              </div>
            </div>
            <div class="info-text  q-mt-md  q-ml-md "></div>
          </div>
        </section>

        <GitHubItem
          class
          v-for="(item, index) in myRepoList"
          :key="index"
          :repoItem="item"
        />
      </section>
    </section>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";
import GitHubItem from "../components/GitHubItem";
import user from "../store/modules/gitHubAPI/user";
export default {
  name: "PageIndex",
  data() {
    return {
      myRepoList: [],
      myInfo: []
    };
  },
  components: { GitHubItem },
  computed: {
    ...mapState({
      gitHubUserRpeoList: state => state.gitHubAPI.repos.gitHubUserRpeoList,
      gitHubUserInfoList: state => state.gitHubAPI.user.gitHubUserInfoList
    })
  },
  methods: {
    ...mapActions({
      gitHubUserRpeo: "gitHubAPI/repos/gitHubUserRpeo",
      gitHubUserInfo: "gitHubAPI/user/gitHubUserInfo"
    }),

    getUserRpeoList() {
      this.gitHubUserRpeo().then(res => {
        this.myRepoList = this.gitHubUserRpeoList;
      });
    },
    getUserInfo() {
      this.gitHubUserInfo().then(res => {
        console.log(this.gitHubUserInfoList);
        this.myInfo = this.gitHubUserInfoList;
      });
    }
  },
  beforeMount() {
    this.getUserRpeoList();
    this.getUserInfo();
  }
};
</script>

<style lang="scss" scoped>

.text-h4 {
    display: block;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
}

.banner-img {
  // background-image: url("https://cdn.quasar.dev/img/mountains.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 130px;
  max-height: 360px;
}
.user-info-block {
  margin-top: -120px;
}


</style>
