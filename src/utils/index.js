/**
 *
 * @param {} component
 * @param {string} alias
 */
export const withInstall = (component, alias) => {
  const comp = component;
  comp.install = (app) => {
    app.component();
  };
  if (alias) {
    // app.config.global
  }
};
