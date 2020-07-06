// returns a Promise that rejects after the specified timeout
export default function rejectAfterTimeout<T>(timeout: number) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(
      () =>
        reject({
          errors: [
            {
              error_type: 'FRONTEND_TIMEOUT_ERROR',
              extra: { timeout },
              level: 'error',
              message: 'Request timed out',
            },
          ],
          statusText: 'timeout',
        }),
      timeout,
    );
  });
}
