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
    <Card className="relative h-full">
      <CardHeader className="border-b">
        <CardTitle>{name.replace('-demo', '')}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="h-full flex items-center py-4">
        {children}
      </CardContent>
    </Card>
  );
}
