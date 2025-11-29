import { Container } from "../ui/container";

export function Hero({ children }) {
  return (
    <div className="relative overflow-hidden py-32">
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary-lighter rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-accent-light rounded-full blur-3xl opacity-30"></div>

      <Container>
        {children}
      </Container>
    </div>
  );
}
