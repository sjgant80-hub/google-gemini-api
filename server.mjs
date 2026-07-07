#!/usr/bin/env node
/**
 * google-gemini-api · HTTP proxy for Google Gemini
 * Sovereign estate wrapper for Google Gemini · AI/LLM
 * Docs: https://ai.google.dev/api
 */
import { createServer } from 'node:http';
const PORT = process.env.PORT || 4200;
createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok', wraps: 'Google Gemini' }));
  res.end(JSON.stringify({ name: 'google-gemini-api', wraps: 'Google Gemini', docs: 'https://ai.google.dev/api' }));
}).listen(PORT, () => console.log('google-gemini-api on', PORT));
