<script setup lang="ts">
import menuService from '@/composables/menu'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import * as icons from '@icon-park/vue-next'

const route = useRoute()

watch(route, () => menuService.setCurrentMenu(route), { immediate: true })
</script>

<template>
  <div class="admin-menu" :class="{ close: menuService.close.value }">
    <div class="menu w-[200px] bg-gray-800">
      <!-- logo -->
      <div class="logo">
        <icon-home theme="outline" size="18" fill="#dcdcdc" class="mr-2" />
        <span class="text-md">斑马兽</span>
      </div>
      <!-- 菜单 -->
      <div class="container">
        <dl v-for="(pmenu, index) of menuService.menus.value" :key="index">
          <dt @click="menuService.toggleParentMenu(pmenu)">
            <section>
              <component :is="icons[pmenu.icon!]" size="18" fill="#dcdcdc" class="mr-2" />
              <span class="text-md">{{ pmenu.title }}</span>
            </section>
            <section>
              <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': pmenu.isClcik }"></i>
            </section>
          </dt>
          <dd :class="!pmenu.isClcik || menuService.close.value ? 'hidden' : 'block'">
            <div :class="{ active: cmenu.isClcik }" v-for="(cmenu, key) of pmenu.children" :key="key" @click="$router.push({ name: cmenu.route })">
              {{ cmenu?.title }}
            </div>
          </dd>
        </dl>
      </div>
      <!-- 遮罩 -->
    </div>
    <div class="bg block md:hiiden" @click="menuService.toggleState"></div>
  </div>
</template>

<style lang="scss" scoped>
.admin-menu {
  @apply z-20;
  .menu {
    @apply h-full;
    .logo {
      @apply text-gray-300 flex items-center p-4;
    }
    .container {
      dl {
        @apply text-gray-300 text-sm relative p-4;
        dt {
          @apply text-sm flex justify-between items-center cursor-pointer;
          section {
            @apply flex items-center;
            i {
              @apply mr-2 text-sm;
            }
          }
        }
        dd {
          div {
            @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500 bg-gray-700;
            &.active {
              @apply bg-violet-700;
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .admin-menu {
    &.close {
      .menu {
        width: auto;
        .logo {
          @apply justify-center;
          i {
            @apply mr-0;
          }
          span {
            @apply hidden;
            &.i-icon {
              @apply block mr-0;
            }
          }
        }
        .container {
          dl {
            dt {
              @apply flex justify-center;
              section {
                span {
                  @apply hidden;
                  &.i-icon {
                    @apply block mr-0;
                  }
                }
                &:nth-of-type(2) {
                  @apply hidden;
                }
              }
            }
            &:hover {
              dd {
                @apply block absolute left-full top-[0] w-[200px] bg-gray-700;
                div {
                  @apply m-0 rounded-none;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .admin-menu {
    @apply h-screen w-[200px] absolute left-0 top-0 z-50;
    .menu {
      @apply h-full z-50 absolute;
      .close {
      }
    }
    .bg {
      @apply bg-gray-100 z-40 opacity-75 w-screen h-screen absolute left-0 top-0;
    }
    &.close {
      @apply hidden;
    }
  }
}
</style>
