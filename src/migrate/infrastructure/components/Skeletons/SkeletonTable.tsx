import { Skeleton } from "@mui/material";

export default function SkeletonTable() {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 container_skeleton">
      <Skeleton width="100%" height={35} />
      <Skeleton width="100%" height={35} />
      <Skeleton width="100%" height={35} />
      <Skeleton width="100%" height={35} />
      <Skeleton width="100%" height={35} />
      <Skeleton width="100%" height={35} />
      <Skeleton width="100%" height={35} />
      <Skeleton width="100%" height={35} />
      <Skeleton width="100%" height={35} />
      <Skeleton width="100%" height={35} />
      <Skeleton width="100%" height={35} />
      <Skeleton width="100%" height={35} />
    </div>
  );
}
