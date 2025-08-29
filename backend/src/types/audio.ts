export interface AudioFile {
  id: string;
  title: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  duration?: number;
  uploadedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AudioUploadRequest {
  title: string;
  description?: string;
}
