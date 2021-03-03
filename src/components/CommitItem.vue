<template>
  <q-item>
    <q-item-section>
      <q-item-label>提交者：{{commitItem.commit.committer.name}}</q-item-label>
      <q-item-label
        caption
        lines="2"
      >
     提交訊息: {{commitItem.commit.message}}
      </q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>{{commitItem.commit.committer.date}}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script>


export default {
  name: "CommitItem",
  data() {
    return {
      expanded: false
    };
  },
  methods: {},
  props: {
    commitItem: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>