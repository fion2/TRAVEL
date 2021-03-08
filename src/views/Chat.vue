<template>
<ul class="chat">
    <li>
<div class="chat-row">
    <div class="chat-row-img">
        <div class="chat-row-img-item h"></div>
    </div>
    <div class="chat-row-text">Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</div>
</div>
    </li>
      <li>
<div class="chat-row you">
    <div class="chat-row-img">
        <div class="chat-row-img-item you"></div>
    </div>
    <div class="chat-row-text">Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</div>
</div>
    </li>
      <li>
<div class="chat-row">
    <div class="chat-row-img">
        <div class="chat-row-img-item"></div>
    </div>
    <div class="chat-row-text">Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</div>
</div>
    </li>
</ul>
</template>
<style scoped>
.chat-row-img-item {
    border-radius: 50%;
    width: 28px;
    height: 28px;
    background-color: cadetblue;
    margin-right: 16px;
    }
    .chat-row-img-item.h {
        background-color: crimson;
    }
.chat-row-img-item.you{
    margin-right: 0;
    margin-left: 16px;
    }
    .chat-row {
        display: flex;
        }
        .chat-row.you {
           flex-direction: row-reverse; 
        }
        .chat-row-text {
            background-color: #cccccc;
            padding: 10px;
            font-size: 12px;
            border-radius: 4px;
            }
.chat li {
margin-bottom: 12px;
    }
    .chat li:last-child {
        margin-bottom: 0;
        }
        .chat {
            padding: 10px;
        }
</style>