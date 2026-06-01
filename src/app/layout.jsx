import "./globals.css";

export const metadata = {
  title: "ATV02 – Consumo de API com React",
  description: "Atividade 02 – Desenvolvimento Web III – Fatec Registro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
