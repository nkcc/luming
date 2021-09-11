<template>
  <q-page class="row items-center justify-evenly">
    <section class="home-background">
      <div class="lm-introduction">
        <div class="lm-text-title">鹿 名 国 际 教 育</div>
        <div class="lm-text-second-title">MAXFUTURE</div>
        <p class="text-center">让世界名校， 不再高不可攀</p>
      </div>
    </section>
    <section class="lm-services">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12 bg-secondary">
          <div class="bar-secondary"></div>
          <div class="media">
            <q-img class="img" src="~/assets/course-1.jpg"></q-img>
            <div class="introduction">
              <div class="sub-title">MAXFUTURE PRODUCTS</div>
              <div class="heading">青云计划</div>
              <p>单所申请世界名校精准直录</p>
              <a href="">READ MORE ></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 bg-primary">
          <div class="bar"></div>
          <div class="media">
            <q-img class="img" src="~/assets/course-2.jpg"></q-img>
            <div class="introduction">
              <div class="sub-title">MAXFUTURE PRODUCTS</div>
              <div class="heading">青云计划</div>
              <p>单所申请世界名校精准直录</p>
              <a href="">READ MORE ></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 bg-secondary">
          <div class="bar-secondary"></div>
          <div class="media">
            <q-img class="img" src="~/assets/course-3.jpg"></q-img>
            <div class="introduction">
              <div class="sub-title">MAXFUTURE PRODUCTS</div>
              <div class="heading">青云计划</div>
              <p>单所申请世界名校精准直录</p>
              <a href="">READ MORE ></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 bg-primary">
          <div class="bar"></div>
          <div class="media">
            <q-img class="img" src="~/assets/course-4.jpg"></q-img>
            <div class="introduction">
              <div class="sub-title">MAXFUTURE PRODUCTS</div>
              <div class="heading">青云计划</div>
              <p>单所申请世界名校精准直录</p>
              <a href="">READ MORE ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lm-points">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="865px"
        class="lm-points-background">
      >
        <template v-slot:navigation-icon="{ active, onClick }">
          <q-btn
            v-if="active"
            size="lg"
            icon="horizontal_rule"
            flat
            dense
            @click="onClick"
            style="color:#cc932e"
          />
          <q-btn
            v-else
            size="lg"
            icon="horizontal_rule"
            color="white"
            flat
            dense
            @click="onClick"
          />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
            <div class="row">
                <div class="col col-sm-12 left">
                    <div class="header">为什么选择鹿名</div>
                    <div class="content">
                        <div class="title">来自海外</div>
                        <p class="discription">
                            鹿名国际成立于美国波士顿，并在伦敦和上海建立分公司，公司所有员工均拥有海外背景……
                        </p>
                    </div>
                    <div class="footer">
                        <q-icon class="dot " name="fiber_manual_record"></q-icon>
                        <a href="">READ MORE ></a>
                    </div>
                </div>
                <div class="col col-sm-12 right"></div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';
import { matHorizontalRule } from '@quasar/extras/material-icons'

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });

    return {
      todos,
      meta,
      controlType: ref('flat'),
      controlTypeOptions: [
        { value: 'regular', label: 'regular' },
        { value: 'unelevated', label: 'unelevated' },
        { value: 'flat', label: 'flat (default)' },
        { value: 'outline', label: 'outline' },
        { value: 'push', label: 'push' },
      ],
      slide: ref('style'),
      lorem:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    };
  }
});
</script>
