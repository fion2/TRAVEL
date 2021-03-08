<template>
  <div>
    <div class="header">Chats2</div>
    <ul class="chatlist">
      <li>
        <div class="a">
          <div class="a-left">
            <div class="image"></div>
          </div>
          <div class="a-right">
            <div class="a-right-1">James</div>
            <div class="a-right-2">Thank you! That was very helpful!</div>
          </div>
        </div>
      </li>
      <li>
        <div class="a">
          <div class="a-left">
            <div class="image"></div>
          </div>
          <div class="a-right">
            <div class="a-right-1">James</div>
            <div class="a-right-2">Thank you! That was very helpful!</div>
          </div>
        </div>
      </li>
      <li>
        <div class="a">
          <div class="a-left">
            <div class="image"></div>
          </div>
          <div class="a-right">
            <div class="a-right-1">James</div>
            <div class="a-right-2">Thank you! That was very helpful!</div>
          </div>
        </div>
      </li>
      <li>
        <div class="a">
          <div class="a-left">
            <div class="image"></div>
          </div>
          <div class="a-right">
            <div class="a-right-1">James</div>
            <div class="a-right-2">Thank you! That was very helpful!</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.header {font-size: 22px;
font-weight: border;
text-align: center;
  }
  .image {
    width: 64px;
    height: 64px;
    background-color: aqua;
    border-radius: 50%;
    }
    .a {
      display: flex;
      padding: 16px 8px 16px 16px;
      }
      .a-left {
        margin-right:16px;
        }
.chatlist li{
  border-bottom: 1px solid #333333 ;

  }
  .chatlist li:last-child {
    border-bottom:none;
    }
.chatlist {
  border: 1px solid #333333;
}
.header {
  padding-bottom:11px;
}
</style>