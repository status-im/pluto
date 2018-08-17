(ns pluto.host)

(defprotocol AppHook
  "Protocol which every extension point in application should implement."
  (id [this] "Keyword representing id of an extension point.")
  (properties [this] "Map of properties used to validate extensions leveraging the hook.")
  (hook-in [this id properties cofx] "Pluto will call this method with hook id and parsed hook data to hook it into host app.")
  (unhook [this id properties cofx] "Pluto will call this method with hook id to remove extension hook from app."))
