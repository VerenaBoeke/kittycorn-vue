<template>
  <div id="kittycornname">
    <div class="result" v-if="kittycornName">
        <div class="content">
            <span class="x" @click="reset()">&times;</span>
            <label>Dein Kittycorn Name:</label>
            <h2>{{ kittycornName }}</h2>
        </div>
    </div>
    <h1>Kittycorn Name Generator</h1>
    <div class="container">
      <div class="content">
        <label>
          Dein Vorname
          <input type="text" v-model="firstname" />
          <small v-if="firstname && invalid">Muss mit A-Z beginnen.</small>
        </label>
        <div class="month-wrapper">
            <label>Dein Geburts-Monat</label>
            <ul>
                <li v-for="(month, index) in months" :key="index"><button @click="selectedMonth=index" :class="{ active: selectedMonth === index }">{{ month }}</button></li>
            </ul>        
        </div>
        <button class="cta" @click="calculate()" :disabled="!firstname || !selectedMonth">Generate!</button>
      </div>
    </div>
  </div>
</template>

<script src="./kittycornName.js"></script>

<style src="./kittycornName.scss" lang="scss"></style>
