# ssl_scan
Checks a list of URLs.  Lets you know whether any are about to expire

## tl;dr
One time:

```
npm install -g ssl_scan
ssl_scan http://google.com/
```

Always watch these sites when asked:

```
ssl_scan --add-monitor http://microsoft.com/
ssl_scan --add-monitor http://amazon.com/
ssl_scan
```

## why
We've all done the "oh my god the cert expired and the service has been down for
three hours" dance.  This is a tool to cease the dance.

## how
Simple enough, really.  This tool just touches the sites it's told about, checks
their SSL certs, checks its local configuration for what the warning threshhold
is, and mentions those over the threshhold, in order of nearness (or over-ness.)

## when
Now.  You know you need it.

Add it to your deploy tests.