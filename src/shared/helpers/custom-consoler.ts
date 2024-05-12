type CustomConsoleProps = {
  label: string;
  message: string | object;
};

function orangeConsole({ label, message }: CustomConsoleProps) {
  console.info(`%c${label} : ${message}`, "padding:8px; color: white; background: orange;");
}
function redConsole({ label, message }: CustomConsoleProps) {
  console.info(`%c${label} : ${message}`, "padding:8px; color: white; background: red;");
}
function blueConsole({ label, message }: CustomConsoleProps) {
  console.info(`%c${label} : ${message}`, "padding:8px; color: white; background: blue;");
}
function greenConsole({ label, message }: CustomConsoleProps) {
  console.info(`%c${label} : ${message}`, "padding:8px; color: white; background: green;");
}

function pending({ label, message }: CustomConsoleProps) {
  console.info(`%c${label} : ${message}`, "padding:4px; color: white; background: orange;");
}
function reject({ label, message }: CustomConsoleProps) {
  console.info(`%c${label} : ${message}`, "padding:4px; color: white; background: red;");
}
function fulfilled({ label, message }: CustomConsoleProps) {
  console.info(`%c${label} : ${message}`, "padding:4px; color: white; background: blue;");
}

const customConsole = {
  orange: orangeConsole,
  red: redConsole,
  blue: blueConsole,
  green: greenConsole,
  pending,
  reject,
  fulfilled,
};
export default customConsole;
