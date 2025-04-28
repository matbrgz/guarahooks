'use client';

import { AlertCircle, Bell, CheckCircle2, XCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useNotifications } from '@/registry/hooks/use-notifications';

export default function UseNotificationsDemo() {
  const {
    permission,
    requestPermission,
    showNotification,
    isSupported,
    isSecureContext,
    supportsActions,
    supportsBadge,
    supportsImage,
    supportsVibrate,
    supportsSound,
  } = useNotifications();

  const handleRequestPermission = async () => {
    try {
      await requestPermission();
    } catch (error) {
      console.error('Failed to request permission:', error);
    }
  };

  const handleShowNotification = () => {
    showNotification('Demo Notification', {
      body: 'This is a test notification from the demo component',
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      image: '/favicon.ico',
      // Actions are only supported with Service Worker
      // actions: [
      //   {
      //     action: 'view',
      //     title: 'View Details',
      //   },
      // ],
    });
  };

  return (
    <Card className="relative max-w-2xl w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          useNotifications
        </CardTitle>
        <CardDescription>
          This component demonstrates the use of the{' '}
          <code>useNotifications</code> hook to manage browser notifications.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">Browser Support</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant={isSupported ? 'default' : 'destructive'}>
              {isSupported ? 'Supported' : 'Not Supported'}
            </Badge>
            <Badge variant={isSecureContext ? 'default' : 'destructive'}>
              {isSecureContext ? 'Secure Context' : 'Not Secure'}
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Feature Support</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant={supportsActions ? 'default' : 'secondary'}>
              Actions {supportsActions ? '✓' : '✗'}
            </Badge>
            <Badge variant={supportsBadge ? 'default' : 'secondary'}>
              Badge {supportsBadge ? '✓' : '✗'}
            </Badge>
            <Badge variant={supportsImage ? 'default' : 'secondary'}>
              Image {supportsImage ? '✓' : '✗'}
            </Badge>
            <Badge variant={supportsVibrate ? 'default' : 'secondary'}>
              Vibrate {supportsVibrate ? '✓' : '✗'}
            </Badge>
            <Badge variant={supportsSound ? 'default' : 'secondary'}>
              Sound {supportsSound ? '✓' : '✗'}
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Permission Status</h3>
          <Badge
            variant={
              permission === 'granted'
                ? 'default'
                : permission === 'denied'
                  ? 'destructive'
                  : 'secondary'
            }
          >
            {permission === 'granted' ? (
              <CheckCircle2 className="mr-1 h-3 w-3" />
            ) : permission === 'denied' ? (
              <XCircle className="mr-1 h-3 w-3" />
            ) : (
              <AlertCircle className="mr-1 h-3 w-3" />
            )}
            {permission.charAt(0).toUpperCase() + permission.slice(1)}
          </Badge>
        </div>

        {!isSupported && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Not Supported</AlertTitle>
            <AlertDescription>
              Your browser does not support the Notifications API. Consider
              using a fallback UI notification system.
            </AlertDescription>
          </Alert>
        )}

        {!isSecureContext && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Not Secure</AlertTitle>
            <AlertDescription>
              The Notifications API requires a secure context (HTTPS). Please
              use HTTPS to enable notifications.
            </AlertDescription>
          </Alert>
        )}

        {supportsActions && (
          <Alert variant="default">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Actions Support</AlertTitle>
            <AlertDescription>
              Note: Notification actions are only supported when using a Service
              Worker. This demo uses the basic Notification API without a
              Service Worker.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          onClick={handleRequestPermission}
          disabled={!isSupported || !isSecureContext}
        >
          Request Permission
        </Button>
        <Button
          onClick={handleShowNotification}
          disabled={
            !isSupported || !isSecureContext || permission !== 'granted'
          }
        >
          Show Notification
        </Button>
      </CardFooter>
    </Card>
  );
}
