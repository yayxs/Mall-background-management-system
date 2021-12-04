import { createApp } from 'vue';
import App from './App.vue';
import { registerGlobComp } from './components/registerGlobComp';
// 应用启动入口
async function bootstrap() {
  const app = createApp(App);
  console.log(app.config);
  app.config.errorHandler = (err, vm, info) => {
    console.log(info);
  };
  app.config.globalProperties.$conf = 'globalProperties';
  app.config.performance = false;
  // Register global components
  registerGlobComp(app);
  app.mount('#app');
}
bootstrap();
