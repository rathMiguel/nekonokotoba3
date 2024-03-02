<template>
  <footer id="footer">
    <p>
      <small
        >© Gravity Co., Ltd. & Lee MyoungJin(studio DTDS). All rights reserved.<br />© GungHo Online Entertainment,
        Inc. All Rights Reserved.<br />当コンテンツの再利用（再転載・配布など）は、禁止しています。
      </small>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/settings' as *;
@use '~/assets/scss/mixins' as *;

#footer {
  background-color: $color-secondary;
  padding: 1em;
  font-family: $ja_go;
  @include media(md) {
    margin-left: $nav-width;
    text-align: right;
  }

  p {
    margin-bottom: 0;
  }
}
</style>
