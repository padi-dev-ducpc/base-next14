export interface ISkeletonLoadingProps {}

export default function SkeletonLoading({}: ISkeletonLoadingProps) {
  return (
    <div className='flex justify-center h-full w-full'>
      <div className='h-full bg-gray-200 dark:bg-gray-700 animate-pulse w-full'></div>
    </div>
  );
}
