import { H1, P } from "../ui/Typography";

export function PageHeader({ title, description }) {
  return (
    <div className="mb-16">
      <H1 className="mb-4">{title}</H1>
      {description && (
        <P className="text-lg max-w-2xl">{description}</P>
      )}
    </div>
  );
}
