type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export namespace userService {}
}

declare namespace API {
  export namespace userService {}
}
