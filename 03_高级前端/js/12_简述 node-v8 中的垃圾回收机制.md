

# 简述 node/v8 中的垃圾回收机制


v8 中的垃圾回收机制分为三种

- Scavenge，工作在新生代，把 from space 中的存活对象移至 to space

- Mark-Sweep，标记清除。新生代的某些对象由于过度活跃会被移至老生代，此时对老生代中活对象进行标记，
并清理死对象

- Mark-Compact，标记整理。



























