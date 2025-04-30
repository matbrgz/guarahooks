'use client';

import React, { useState } from 'react';

import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useAxios } from '@/registry/hooks/use-axios';

export default function UseAxiosDemoComponent() {
  const [url, setUrl] = useState(
    'https://jsonplaceholder.typicode.com/posts/1',
  );
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { loading, error, data, get, post, resetError } = useAxios({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  const handleGetRequest = async () => {
    try {
      await get(url.replace('https://jsonplaceholder.typicode.com', ''));
      setSuccessMessage('GET request succeeded!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error in GET request:', err);
    }
  };

  const handlePostRequest = async () => {
    try {
      await post('/posts', {
        title: postTitle,
        body: postBody,
        userId: 1,
      });
      setSuccessMessage('POST request succeeded!');
      setPostTitle('');
      setPostBody('');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error in POST request:', err);
    }
  };

  return (
    <div className="space-y-8 max-w-sm w-full">
      <Card className="max-w-sm w-full">
        <CardHeader>
          <CardTitle>GET Request</CardTitle>
          <CardDescription>Fetch data from an API endpoint</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://jsonplaceholder.typicode.com/posts/1"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleGetRequest}
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...
              </>
            ) : (
              'Send GET Request'
            )}
          </Button>
        </CardFooter>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error.message}
            <Button
              variant="link"
              onClick={resetError}
              className="p-0 h-auto font-normal ml-2"
            >
              Dismiss
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {successMessage && (
        <Alert className="bg-green-500/50 border-green-600 text-green-800">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{successMessage}</AlertDescription>
        </Alert>
      )}

      {data && (
        <Card className="max-w-sm w-full">
          <CardHeader>
            <CardTitle>Response Data</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-zinc-950 p-4 rounded-md overflow-auto max-h-60">
              {JSON.stringify(data, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
