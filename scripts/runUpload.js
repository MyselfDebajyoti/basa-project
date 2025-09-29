import { runMemberUpload } from './memberUploader.js';

console.log('🚀 Starting member upload...\n');

try {
  const result = await runMemberUpload();
  console.log('\n✅ Upload completed successfully!');
  console.log('Final result:', result);
} catch (error) {
  console.error('\n❌ Upload failed:', error.message);
  process.exit(1);
}