import React from 'react'

export const Grid = () => {
  return (
<div class="grid grid-cols-2 gap-4 h-full py-24 px-4">


<div class="col-span-2 grid grid-cols-2 gap-4 h-full">
    <div class="col-span-1 h-full">
        <div class="bg-red-500 h-full p-4 text-white">Box 2 (Second Row)</div>
    </div>
    <div class="col-span-1 h-full">
        <div class="bg-red-500 h-full p-4 text-white">Box 2 (Second Row)</div>
    </div>
</div>

<div class="col-span-2 grid grid-cols-3 gap-4 h-full">

    <div class="col-span-1 h-full">
        <div class="bg-red-500 h-full p-4 text-white">Box 2 (Second Row)</div>
    </div>
    <div class="col-span-1">
        <div class="bg-yellow-500 p-4 h-full text-white">Box 3 (Second Row)</div>
    </div>
    <div class="col-span-1 h-full">
        <div class="bg-purple-500 p-4 h-full text-white">Box 4 (Second Row)</div>
    </div>

</div>

</div>
  )
}
