import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

type HookCardProps = {
  name: string;
  description: string;
  children: React.ReactNode;
};

export function HookCard({ name, description, children }: HookCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name.replace('-demo', '')}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
