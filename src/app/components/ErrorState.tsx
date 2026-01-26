import { Button } from "./ui/button";

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      </div>
      
      <h3 className="text-lg font-semibold text-red-900 mb-2">
        حدث خطأ
      </h3>
      
      <p className="text-red-700 mb-4">
        {message}
      </p>
      
      {onRetry && (
        <Button 
          onClick={onRetry}
          variant="outline"
          className="border-red-300 text-red-700 hover:bg-red-50"
        >
          إعادة المحاولة
        </Button>
      )}
    </div>
  );
}
