import React from "react";
import Loading from '@/components/loading'
import useGlobalStore from "@/stores/global";

function authHOC<T extends object>(Component: React.FC<T>): React.FC<T> {
  return (props) => {
    const { isAuthReady } = useGlobalStore()
    if (!isAuthReady) {
      return <Loading />
    }
    return <Component {...props} />
  }
};

export default authHOC;