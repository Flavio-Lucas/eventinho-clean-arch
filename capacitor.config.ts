import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.flaviolucas.eventinho',
  appName: 'Eventinho',
  webDir: 'build',
  plugins: {
    SplashScreen: {
      launchShowDuration: 300, // Duração da splash screen em milissegundos
      launchAutoHide: true, // Oculta a splash screen automaticamente
      backgroundColor: '#ffffff', // Cor de fundo
      androidScaleType: 'CENTER_CROP', // Tipo de escala da imagem no Android
      showSpinner: true, // Exibe um spinner de carregamento
      spinnerStyle: 'large', // Estilo do spinner
      iosSpinnerStyle: 'small', // Estilo do spinner no iOS
      spinnerColor: '#999999', // Cor do spinner
      splashFullScreen: true, // Tela cheia para splash screen no Android
      splashImmersive: true // Modo imersivo para splash screen no Android
    }
  }
};

export default config;
