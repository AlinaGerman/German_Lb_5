alert('Целочисенная матрица размера M на N, у которой элементы j-ого столбца умножены на 5');
var number_of_lines=prompt('Введите количество строк', '');
var number_of_columns=prompt('Введите количество столбцов', '');
if (isNaN(Number(number_of_lines)) || isNaN(Number(number_of_columns)) || Number(number_of_lines)%1!=0 || Number(number_of_columns)%1!=0 || number_of_lines=='' || number_of_columns==''){
    alert('Количество строк и столбцов должны быть целыми числами');
} else{
    if (Number(number_of_lines)>0 && Number(number_of_lines)<=10 && Number(number_of_columns)>0 && Number(number_of_columns)<=10){
        var matrix=[];
        for (let i=0;i<Number(number_of_lines);i++){
            let help_array=[];
            for (let j=0;j<Number(number_of_columns);j++){
                help_array.push(Math.round(Math.random()*100));
            }
            matrix.push(help_array);
        }
        var matrix_output=[];
        for (let i=0; i<matrix.length;i++){
            matrix_output[i]=matrix[i].join('      ');
        }
        alert(matrix_output.join('\n'));
        var change_column=prompt('Введите нормер столбца', '');
        if (Number(change_column)%1!=0 || change_column=='' || isNaN(Number(change_column)) || Number(change_column)>Number(number_of_columns) || Number(change_column)<=0){
            alert('Неверно введен номер столбца');
        } else{
            for (let i=0;i<matrix.length;i++){
                for (let j=0;j<matrix[i].length;j++){
                    if (Number(change_column)==j+1){
                        matrix[i][j]=matrix[i][j]*5;
                    }
                }
            }
            for (let i=0; i<matrix.length;i++){
                matrix_output[i]=matrix[i].join('      ');
            }
            alert(matrix_output.join('\n'));
        }
    }else{
        alert('Количество строк и столбцов должны быть больше 0 и меньше или равны 10');
    }
}