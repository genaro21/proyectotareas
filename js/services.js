 const taskStore = []
 let count = 1


  // CLIENTE
 function drawTask() {
  const tasks = listarTareas ()
  const taskContainer = document.getElementById("task-container")
  taskContainer.innerHTML = ""
  for (const task of tasks) {
    taskContainer.innerHTML = taskContainer.innerHTML + getTaskTemplate(task)
  }
 }

function getTaskTemplate (task) {
  const taskTemplate = `
  <div class="card">
  <div class="card-body">
      <h5 class="card-title">${task.titulo}</h5>
          <div class="row">
              <div class="col-8">
                 <p>${task.descripcion}
              </div>
              <div class="col-4">
                  <div class="d-grid gap-2">
                      <button onclick="removeTask(${task.id})" class="btn btn-danger" type="button">Eliminar</button>
                      <button onclick="openTaskModal(${task.id})" class="btn btn-primary" type="button"data-bs-toggle="modal" data-bs-target="#edit-form" >Editar</button>
                    </div>
              </div>
          </div>
      </h5>
  </div>
</div>
`
return taskTemplate
}

function openTaskModal (id) {
  const eEditTitle = document.getElementById("edit-title")
  const eEditDescription = document.getElementById("edit-description")

  const task = getTask (id)
  
  
  eEditTitle.value = task.title
  eEditDescription.value = task.description
}

function removeTask (id) {
  borrarTareas (id)
  drawTask()
}
      // API

function crearTareas() {
   const eTitulo = document.getElementById("titulo")
   const eDescripcion = document.getElementById("descripcion")
   
   if (!eTitulo.value || !eDescripcion.value) {
        alert("Hay campos vacíos")
        return
   }
   const task = {
       id: count,
       titulo: eTitulo.value,
       descripcion: eDescripcion.value
   }
  count = count + 1
  taskStore.push(task)
  drawTask()

  console.log(taskStore)
}

function listarTareas () {
  return taskStore
}

function getTask (id) {
  let index = -1
  let counter = 0
  while (counter < taskStore.length) {
    const task = taskStore[counter]
    if (task.id === id) {
      index = counter
    }
    counter = counter + 1
  }

  if (index > -1){
    return taskStore[index]
  } else {
    return undefined
  }
}

function editarTareas () {

}

function borrarTareas (id) {

  let index = -1
  let counter = 0
  while (counter<taskStore.length) {
    const task = taskStore[counter]
    if (task.id === id) {
      index = counter
    }
    counter = counter + 1
  }
  if (index > -1) {
    taskStore.splice(index, 1)
  }
}