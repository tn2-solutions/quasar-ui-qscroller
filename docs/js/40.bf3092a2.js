(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"3c2d":function(n,e,a){"use strict";a.r(e),e["default"]="<template>\n  <div class=\"q-pa-md row justify-evenly q-gutter-sm\">\n    <q-input color=\"blue-8\" filled v-model=\"value\" label=\"Enter a Zoo Animal\">\n      <template v-slot:append>\n        <q-icon name=\"fas fa-paw\" class=\"cursor-pointer\">\n          <q-popup-proxy v-model=\"showScroller1\" anchor=\"top right\" self=\"bottom middle\">\n            <q-scroller\n              v-model=\"value\"\n              :items=\"items\"\n              no-header\n              rounded-borders\n              :style=\"scrollerPopupStyle200\"\n              @close=\"() => { showScroller1 = false }\"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n    <q-input color=\"blue-8\" filled v-model=\"value\" label=\"Enter a Zoo Animal\">\n      <template v-slot:append>\n        <q-icon name=\"fas fa-paw\" class=\"cursor-pointer\">\n          <q-popup-proxy v-model=\"showScroller2\" anchor=\"top right\" self=\"bottom middle\">\n            <q-scroller\n              v-model=\"value\"\n              :items=\"items\"\n              rounded-borders\n              text-color=\"grey-3\"\n              color=\"black\"\n              inner-text-color=\"black\"\n              inner-color=\"grey-3\"\n              bar-color=\"accent\"\n              :style=\"scrollerPopupStyle200\"\n              @close=\"() => { showScroller2 = false }\"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n    <q-input color=\"blue-8\" filled v-model=\"value\" label=\"Enter a Zoo Animal\">\n      <template v-slot:append>\n        <q-icon name=\"fas fa-paw\" class=\"cursor-pointer\">\n          <q-popup-proxy v-model=\"showScroller3\" anchor=\"top right\" self=\"bottom middle\">\n            <q-scroller\n              v-model=\"value\"\n              :items=\"items\"\n              dense\n              rounded-borders\n              text-color=\"grey-3\"\n              color=\"black\"\n              inner-text-color=\"black\"\n              inner-color=\"grey-3\"\n              bar-color=\"accent\"\n              :style=\"scrollerPopupStyle120\"\n              @close=\"() => { showScroller3 = false }\"\n            />\n          </q-popup-proxy>\n        </q-icon>\n      </template>\n    </q-input>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'StringQInput',\n\n  data () {\n    return {\n      showScroller1: false,\n      showScroller2: false,\n      showScroller3: false,\n      value: '',\n      items: [\n        { value: 'Anteater', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Baboons', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Cheetah', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Chimpanzee', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Elephant', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Giant Pandas', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Gibbon', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Giraffe', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Gorilla', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Hippopotamus', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Jaguar', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Koala', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Komodo Dragon', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Lemurs', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Lion', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Meerkat', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Monkey', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Orangutan', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Penguin', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Polar Bear', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Red Panda', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Rhinoceros', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Ring-tailed Lemur', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Sea lion', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Sloth', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Tiger', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Wallaby (Kangaroo)', noCaps: true, iconRight: void 0, disabled: false, align: 'around' },\n        { value: 'Zebra', noCaps: true, iconRight: void 0, disabled: false, align: 'around' }\n      ]\n    }\n  },\n\n  computed: {\n    scrollerPopupStyle200 () {\n      if (this.$q.screen.lt.sm) {\n        return {\n          width: '90vw',\n          height: '70vh'\n        }\n      } else {\n        return {\n          maxHeight: '200px',\n          height: '200px',\n          width: '200px'\n        }\n      }\n    },\n    scrollerPopupStyle120 () {\n      if (this.$q.screen.lt.sm) {\n        return {\n          width: '90vw',\n          height: '70vh'\n        }\n      } else {\n        return {\n          maxHeight: '200px',\n          height: '200px',\n          width: '120px'\n        }\n      }\n    }\n  }\n}\n<\/script>\n"}}]);