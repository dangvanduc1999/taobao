const $ = document.querySelector.bind(document)
const $all = document.querySelectorAll.bind(document);

function handleGetCurrentRow () {
    return $all('tr[data-row')
}
function addMinus() {
    const listBtnMinusRow = $all(".minus-row")
    if (!listBtnMinusRow.length < 0) {
        return
    }
    listBtnMinusRow.forEach(btn => {
        btn.addEventListener("click", function (e) {
            const getDataRow = btn.getAttribute("data-row")
            const selectedRow = $(`tr[data-row="${getDataRow}"]`)
            selectedRow.remove()
        })
    })
}

const btnAddCodeEle = $(".add-row");
const bodyCodeEle = $("#body-code");


btnAddCodeEle.addEventListener('click', function (e) {
    const currentRow = handleGetCurrentRow();
    const newRow = document.createElement('tr', )
    if (!currentRow || (currentRow && currentRow.length === 0)) {
        newRow.setAttribute("data-row", 1)
        newRow.innerHTML = ` <td class="col-1 text-center">1</td>
                                            <td class="col-2">
                                                <div>
                                                    <input class="form-control" type="text"/>
                                                </div>
                                            </td>
                                            <td class="col-3">
                                                <div>
                                                    <select class="form-select form-select-lg mb-3"
                                                            aria-label="Large select example">
                                                        <option selected>Default
                                                        </option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <textarea class="form-control"
                                                              placeholder="ghi chú"> </textarea>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <input class="form-control" type="number"
                                                           style="appearance: none"/>
                                                </div>
                                            </td>
                                            <td data-row="1">
                                                <div class="minus-row" data-row="1">
                                                    <i class="ri-subtract-line" data-row="1"></i>
                                                </div>
                                            </td>`
        bodyCodeEle.append(newRow)
        addMinus()
        return;
    }
    newRow.setAttribute("data-row", currentRow.length +1)
    newRow.innerHTML = `  <td class="col-1 text-center">${currentRow.length + 1}</td>
                                            <td class="col-2">
                                                <div>
                                                    <input class="form-control" type="text"/>
                                                </div>
                                            </td>
                                            <td class="col-3">
                                                <div>
                                                    <select class="form-select form-select-lg mb-3"
                                                            aria-label="Large select example">
                                                        <option selected>Default
                                                        </option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <textarea class="form-control"
                                                              placeholder="ghi chú"> </textarea>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <input class="form-control" type="number"
                                                           style="appearance: none"/>
                                                </div>
                                            </td>
                                            <td data-row="${currentRow.length + 1}">
                                                <div class="minus-row" data-row="${currentRow.length + 1}">
                                                    <i class="ri-subtract-line" data-row="${currentRow.length + 1}"></i>
                                                </div>
                                            </td>`
    bodyCodeEle.append(newRow)
    addMinus()
})

addMinus()