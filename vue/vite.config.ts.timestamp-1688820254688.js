// vite.config.ts
import { loadEnv } from "vite";

// vite/alias.ts
import path from "path";
var alias = {
  "@": path.resolve("D:\\bm\\v2023\\laravel-banmashou\\vue\\vite", "../src"),
  "#": path.resolve("D:\\bm\\v2023\\laravel-banmashou\\vue\\vite", "../types")
};
var alias_default = alias;

// vite/util.ts
import _ from "lodash";
function parseEnv(env) {
  const envs = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value == "true" || value == "false")
      envs[key] = value == "true" ? true : false;
    else if (/^\d+$/.test(value))
      envs[key] = Number(value);
    else if (value == "null")
      envs[key] = null;
    else if (value == "undefined")
      envs[key] = void 0;
  });
  return envs;
}

// vite/plugins/index.ts
import vue from "@vitejs/plugin-vue";

// vite/plugins/mock.ts
import { viteMockServe } from "vite-plugin-mock";
function setupMockPlugin(isBuild) {
  return viteMockServe({
    mockPath: "mock",
    localEnabled: !isBuild
  });
}

// vite/plugins/autoImport.ts
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver, VueUseComponentsResolver } from "unplugin-vue-components/resolvers";
function autoImport(plugins) {
  plugins.push(
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router"],
      dts: "types/auto-imports.d.ts"
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        VueUseComponentsResolver()
      ],
      dirs: ["src/components"],
      directoryAsNamespace: true,
      dts: "types/components.d.ts"
    })
  );
}

// vite/plugins/index.ts
function setupPlugins(isBuild, env) {
  const plugins = [vue()];
  plugins.push(setupMockPlugin(isBuild));
  autoImport(plugins);
  return plugins;
}

// vite.config.ts
import { visualizer } from "rollup-plugin-visualizer";
var vite_config_default = ({ command, mode }) => {
  const isBuild = command == "build";
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  return {
    plugins: [...setupPlugins(isBuild, env), visualizer()],
    resolve: {
      alias: alias_default
    },
    server: {
      host: true,
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true
        }
      }
    },
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          }
        }
      }
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS9hbGlhcy50cyIsICJ2aXRlL3V0aWwudHMiLCAidml0ZS9wbHVnaW5zL2luZGV4LnRzIiwgInZpdGUvcGx1Z2lucy9tb2NrLnRzIiwgInZpdGUvcGx1Z2lucy9hdXRvSW1wb3J0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb25maWdFbnYsIGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBhbGlhcyBmcm9tICcuL3ZpdGUvYWxpYXMnXHJcbmltcG9ydCB7IHBhcnNlRW52IH0gZnJvbSAnLi92aXRlL3V0aWwnXHJcbmltcG9ydCBzZXR1cFBsdWdpbnMgZnJvbSAnLi92aXRlL3BsdWdpbnMnXHJcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjb21tYW5kLCBtb2RlIH06IENvbmZpZ0VudikgPT4ge1xyXG5cdGNvbnN0IGlzQnVpbGQgPSBjb21tYW5kID09ICdidWlsZCdcclxuXHRjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKVxyXG5cdGNvbnN0IGVudiA9IHBhcnNlRW52KGxvYWRFbnYobW9kZSwgcm9vdCkpXHJcblx0cmV0dXJuIHtcclxuXHRcdHBsdWdpbnM6IFsuLi5zZXR1cFBsdWdpbnMoaXNCdWlsZCwgZW52KSwgdmlzdWFsaXplcigpXSxcclxuXHRcdHJlc29sdmU6IHtcclxuXHRcdFx0YWxpYXMsXHJcblx0XHR9LFxyXG5cdFx0c2VydmVyOiB7XHJcblx0XHRcdC8vIGhvc3Q6IGVudi5WSVRFX0hPU1QsIC8vIGlwXHU1NzMwXHU1NzQwXHJcblx0XHRcdC8vIHBvcnQ6IGVudi5WSVRFX1BPUlQsIC8vXHU3QUVGXHU1M0UzXHU1M0Y3XHJcblx0XHRcdC8vIG9wZW46IGZhbHNlLFxyXG5cdFx0XHRob3N0OiB0cnVlLFxyXG5cdFx0XHRwcm94eToge1xyXG5cdFx0XHRcdCcvYXBpJzoge1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiBlbnYuVklURV9BUElfVVJMLFxyXG5cdFx0XHRcdFx0Y2hhbmdlT3JpZ2luOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0YnVpbGQ6IHtcclxuXHRcdFx0cm9sbHVwT3B0aW9uczoge1xyXG5cdFx0XHRcdGVtcHR5T3V0RGlyOiB0cnVlLFxyXG5cdFx0XHRcdG91dHB1dDoge1xyXG5cdFx0XHRcdFx0bWFudWFsQ2h1bmtzKGlkOiBzdHJpbmcpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBpZC50b1N0cmluZygpLnNwbGl0KCdub2RlX21vZHVsZXMvJylbMV0uc3BsaXQoJy8nKVswXS50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fVxyXG59XHJcbiIsICIvKipcclxuICogQGRlc2NyaXB0aW9uIFx1OTE0RFx1N0Y2RVx1OERFRlx1NUY4NFx1NTIyQlx1NTQwRFxyXG4gKiBAYXV0aG9yOiBcdTY1OTFcdTlBNkNcdTUxN0RcclxuICovXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IEFsaWFzT3B0aW9ucyB9IGZyb20gJ3ZpdGUnXHJcbmNvbnN0IGFsaWFzID0ge1xyXG5cdCdAJzogcGF0aC5yZXNvbHZlKFwiRDpcXFxcYm1cXFxcdjIwMjNcXFxcbGFyYXZlbC1iYW5tYXNob3VcXFxcdnVlXFxcXHZpdGVcIiwgJy4uL3NyYycpLFxyXG5cdCcjJzogcGF0aC5yZXNvbHZlKFwiRDpcXFxcYm1cXFxcdjIwMjNcXFxcbGFyYXZlbC1iYW5tYXNob3VcXFxcdnVlXFxcXHZpdGVcIiwgJy4uL3R5cGVzJyksXHJcbn0gYXMgQWxpYXNPcHRpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGlhc1xyXG4iLCAiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRW52KGVudjogUmVjb3JkPHN0cmluZywgYW55Pik6IEltcG9ydE1ldGFFbnYge1xyXG4gIGNvbnN0IGVudnM6IGFueSA9IF8uY2xvbmVEZWVwKGVudilcclxuICAvLyBcdTkwNERcdTUzODZlbnZcdTVCRjlcdThDNjFcdUZGMENcdTVDMDZcdTUwM0NcdTRFM0F0cnVlXHU3Njg0XHU4RjZDXHU2MzYyXHU0RTNBXHU1RTAzXHU1QzE0XHU1MDNDXHVGRjBDXHU1MDNDXHU0RTNBXHU2NTcwXHU1QjU3XHU3Njg0XHU4RjZDXHU2MzYyXHU0RTNBXHU2NTcwXHU1QjU3XHJcbiAgT2JqZWN0LmVudHJpZXMoZW52KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PSAndHJ1ZScgfHwgdmFsdWUgPT0gJ2ZhbHNlJykgZW52c1trZXldID0gdmFsdWUgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICBlbHNlIGlmICgvXlxcZCskLy50ZXN0KHZhbHVlKSkgZW52c1trZXldID0gTnVtYmVyKHZhbHVlKVxyXG4gICAgZWxzZSBpZiAodmFsdWUgPT0gJ251bGwnKSBlbnZzW2tleV0gPSBudWxsXHJcbiAgICBlbHNlIGlmICh2YWx1ZSA9PSAndW5kZWZpbmVkJykgZW52c1trZXldID0gdW5kZWZpbmVkXHJcbiAgfSlcclxuICByZXR1cm4gZW52c1xyXG59XHJcbiIsICJpbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgc2V0dXBNb2NrUGx1Z2luIH0gZnJvbSAnLi9tb2NrJ1xyXG5pbXBvcnQgYXV0b0ltcG9ydCBmcm9tICcuL2F1dG9JbXBvcnQnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwUGx1Z2lucyhpc0J1aWxkOiBib29sZWFuLCBlbnY6IFZpdGVFbnYpIHtcclxuICBjb25zdCBwbHVnaW5zOiBQbHVnaW5bXSA9IFt2dWUoKV1cclxuXHJcbiAgcGx1Z2lucy5wdXNoKHNldHVwTW9ja1BsdWdpbihpc0J1aWxkKSlcclxuXHJcbiAgYXV0b0ltcG9ydChwbHVnaW5zKVxyXG4gIHJldHVybiBwbHVnaW5zXHJcbn1cclxuIiwgImltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBNb2NrUGx1Z2luKGlzQnVpbGQ6IGJvb2xlYW4pIHtcclxuICByZXR1cm4gdml0ZU1vY2tTZXJ2ZSh7XHJcbiAgICAvLyBkZWZhdWx0XHJcbiAgICBtb2NrUGF0aDogJ21vY2snLFxyXG4gICAgbG9jYWxFbmFibGVkOiAhaXNCdWlsZCxcclxuICB9KVxyXG59XHJcbiIsICJpbXBvcnQgeyBQbHVnaW4gfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyLCBWdWVVc2VDb21wb25lbnRzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRvSW1wb3J0KHBsdWdpbnM6IFBsdWdpbltdKSB7XHJcblx0cGx1Z2lucy5wdXNoKFxyXG5cdFx0QXV0b0ltcG9ydCh7XHJcblx0XHRcdHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcblx0XHRcdC8vXHU1RjE1XHU1MTY1ZWxlbWVudCBwbHVzXHU4MUVBXHU1MkE4YXBpXHU2NTJGXHU2MzAxXHJcblx0XHRcdGltcG9ydHM6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInXSxcclxuXHRcdFx0Ly9cdTRFM0F0cnVlXHU2NUY2XHU1NzI4XHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1XHU4MUVBXHU1MkE4XHU1MjFCXHU1RUZBXHJcblx0XHRcdGR0czogJ3R5cGVzL2F1dG8taW1wb3J0cy5kLnRzJyxcclxuXHRcdH0pLFxyXG5cdFx0Q29tcG9uZW50cyh7XHJcblx0XHRcdHJlc29sdmVyczogW1xyXG5cdFx0XHRcdEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcclxuXHRcdFx0XHRWdWVVc2VDb21wb25lbnRzUmVzb2x2ZXIoKVxyXG5cdFx0XHRdLFxyXG5cdFx0XHQvL1x1ODFFQVx1NTJBOFx1NTJBMFx1OEY3RFx1NzY4NFx1N0VDNFx1NEVGNlx1NzZFRVx1NUY1NVx1RkYwQ1x1OUVEOFx1OEJBNFx1NTAzQ1x1NEUzQSBbJ3NyYy9jb21wb25lbnRzJ11cclxuXHRcdFx0ZGlyczogWydzcmMvY29tcG9uZW50cyddLFxyXG5cdFx0XHQvL1x1N0VDNFx1NEVGNlx1NTQwRFx1NzlGMFx1NTMwNVx1NTQyQlx1NzZFRVx1NUY1NVx1RkYwQ1x1OTYzMlx1NkI2Mlx1NTQwQ1x1NTQwRFx1N0VDNFx1NEVGNlx1NTFCMlx1N0E4MVxyXG5cdFx0XHRkaXJlY3RvcnlBc05hbWVzcGFjZTogdHJ1ZSxcclxuXHRcdFx0Ly9cdTYzMDdcdTVCOUFcdTdDN0JcdTU3OEJcdTU4RjBcdTY2MEVcdTY1ODdcdTRFRjZcdUZGMENcdTRFM0F0cnVlXHU2NUY2XHU1NzI4XHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1XHU1MjFCXHU1RUZBXHJcblx0XHRcdGR0czogJ3R5cGVzL2NvbXBvbmVudHMuZC50cycsXHJcblx0XHR9KSxcclxuXHQpXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQWtDLGVBQWU7OztBQ0lqRCxPQUFPLFVBQVU7QUFFakIsSUFBTSxRQUFRO0FBQUEsRUFDYixLQUFLLEtBQUssUUFBUSwrQ0FBK0MsUUFBUTtBQUFBLEVBQ3pFLEtBQUssS0FBSyxRQUFRLCtDQUErQyxVQUFVO0FBQzVFO0FB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
