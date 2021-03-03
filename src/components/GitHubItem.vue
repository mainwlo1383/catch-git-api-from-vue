<template>
  <div class="col-12 col-sm-6 col-md-4 q-pa-md">
    <q-card class="my-card" flat bordered>
      <q-card-section class="project-card">
        <div class="text-overline text-orange-9">專案名稱</div>
        <div class="text-h5 q-mx-xs row">
          <q-item-label lines="1">{{ repoItem.name }}</q-item-label>
          <q-btn
            flat
            round
            color="primary"
            icon="link"
            type="a"
            :href="repoItem.html_url"
          />
        </div>

        <div class="text-caption text-grey" v-if="repoItem.language">
          技術標籤
        </div>

        <div class="q-py-sm q-gutter-md" v-if="repoItem.language">
          <div v-if="repoItem.language == 'CSS'">
            <span class="repo-language-color" style="background-color: #F2C037">
            </span>
            <span>CSS</span>
          </div>

          <div v-if="repoItem.language == 'HTML'">
            <span class="repo-language-color" style="background-color: #009688">
            </span>
            <span>HTML</span>
          </div>

          <div v-if="repoItem.language == 'JavaScript'">
            <span class="repo-language-color" style="background-color: #ff9800">
            </span>
            <span>JavaScript</span>
          </div>

          <div v-if="repoItem.language == 'C#'">
            <span class="repo-language-color" style="background-color: #31CCEC">
            </span>
            <span>C#</span>
          </div>

          <div v-if="repoItem.language == 'TypeScript'">
            <span class="repo-language-color" style="background-color: #C10015">
            </span>
            <span>TypeScript</span>
          </div>
        </div>
      </q-card-section>
      <q-separator />

      <q-card-actions @click="switchItemOpen(repoItem.name)" class="text-white">
        <span class="q-ml-md text-black">專案提交紀錄</span>
        <q-space />
        <q-btn
          color="orange-9"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <div class="q-pa-md relative-position">
            <q-list v-if="FileCommit.length > 0">
              <span v-for="(item, index) in FileCommit" :key="index">
                <CommitItem :commitItem="item"></CommitItem>
                <q-separator v-if="index < FileCommit.length - 1" />
              </span>
            </q-list>
            <span v-else>{{ "該專案尚未有提交紀錄" }}</span>
            <q-inner-loading :showing="visible" class="absolute-center">
              <q-spinner size="50px" color="primary" />
            </q-inner-loading>
          </div>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<style>
.project-card {
  height: 180px;
}
.my-card {
  border-radius: 10px;
  border: 2px solid #ef6c00;
}

.text-caption {
  margin-top: 10px;
}

.repo-language-color {
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid var(--color-repo-language-color-border);
  border-radius: 50%;
  margin-right: 10px;
}


</style>

<script>
import { mapState, mapActions } from "vuex";

import CommitItem from "./CommitItem";
export default {
  name: "GitHubItem",
  data() {
    return {
      expanded: false,
      FileCommit: [],
      visible: false
    };
  },
  components: { CommitItem },
  computed: {
    ...mapState({
      gitHubFileCommitList: state =>
        state.gitHubAPI.commits.gitHubFileCommitList
    })
  },
  methods: {
    ...mapActions({
      gitHubFileCommit: "gitHubAPI/commits/gitHubFileCommit"
    }),

    getFileCommit(name) {
      this.visible = true;
      this.gitHubFileCommit(name).then(res => {
        this.visible = false;
        this.FileCommit = this.gitHubFileCommitList;
      });
    },
    switchItemOpen(name) {
      this.expanded = !this.expanded;
      if (this.expanded == true) this.getFileCommit(name);
    }
  },
  beforeMount() {},
  props: {
    repoItem: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
