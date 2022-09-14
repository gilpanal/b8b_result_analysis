import matplotlib.pyplot as plt
from sklearn import metrics
from sklearn.metrics import RocCurveDisplay


# CNN 0,3
# cello
cello_test_cnn_cello5_piano1_violin5 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1]
cello_pred_cnn_cello5_piano1_violin5 = [0.6513975024223327, 0.6979419390360514, 0.44679578542709353, 0.8636074662208557,  0.8184033364057541,
                                  0, 0.5110254287719727, 0, 0, 0, 0.7907780051231384 ]

#print(len(cello_test_cnn_cello5_piano1_violin5))
#print(len(cello_pred_cnn_cello5_piano1_violin5))
#RocCurveDisplay.from_predictions(cello_test_cnn_cello5_piano1_violin5, cello_pred_cnn_cello5_piano1_violin5)

# violin
violin_test_cnn_cello5_flute2_harp2_piano1_sitar2_violin5_voice1 = [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]
violin_pred_cnn_cello5_flute2_harp2_piano1_sitar2_violin5_voice1 = [0.6339149938689338, 0.6852962970733643, 0.5649195127189159, 0.714180999994278, 0.719554728269577,
                     0.4251098367902968, 0.6369408294558525, 0.5541870296001434, 0.3907819290955861, 0.3511785566806793,
                     0.3837035447359085, 0.3573192358016968, 0.8067782282829284, 0.8324222922325134, 0.7028950870037078,
                     0.699684488773346, 0.7269867181777954, 0.4471147954463959]

#print(len(violin_test_cnn_cello5_flute2_harp2_piano1_sitar2_violin5_voice1))
#print(len(violin_pred_cnn_cello5_flute2_harp2_piano1_sitar2_violin5_voice1))

#RocCurveDisplay.from_predictions(violin_test_cnn_cello5_flute2_harp2_piano1_sitar2_violin5_voice1, 
#                                 violin_pred_cnn_cello5_flute2_harp2_piano1_sitar2_violin5_voice1)


# guitar
guitar_test_cnn_cello1_guitar5_harp5_harpsichord2_piano1_sitar4_voice1 =  [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
guitar_pred_cnn_cello1_guitar5_harp5_harpsichord2_piano1_sitar4_voice1 = [0.33071601390838623, 0.6529603362083435, 0.9284815430641175, 0.8058418273925781, 0.879165768623352, 0.6387929141521453,
                   0.7314554035663605, 0.5466236836380429, 0.6031461000442505, 0.6238617599010468, 0.45027023553848267,
                   0.42433953285217285, 0.385968138774236,
                   0.44610026478767395,
                   0.3998801112174988, 0.31172841787338257, 0.3635566532611847, 0.3225238521893819,
                   0.4748346358537674] 

#print(len(guitar_test_cnn_cello1_guitar5_harp5_harpsichord2_piano1_sitar4_voice1))
#print(len(guitar_pred_cnn_cello1_guitar5_harp5_harpsichord2_piano1_sitar4_voice1))
#RocCurveDisplay.from_predictions(guitar_test_cnn_cello1_guitar5_harp5_harpsichord2_piano1_sitar4_voice1, 
#                                 guitar_pred_cnn_cello1_guitar5_harp5_harpsichord2_piano1_sitar4_voice1)


# VGG 0,3
# cello
cello_test_vgg_cello5_piano1_violin5 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1]
cello_pred_vgg_cello5_piano1_violin5 = [0.5978322327136993, 0.6237003773450851, 0.3923864603042603, 0.8627641856670379, 0.8781733453273773, 0.3733420173327128,
                       0.691012978553772,  0, 0.34914711117744446, 0, 0.8400429487228394 ]

#print(len(cello_test_vgg_cello5_piano1_violin5))
#print(len(cello_pred_vgg_cello5_piano1_violin5))
#RocCurveDisplay.from_predictions(cello_test_vgg_cello5_piano1_violin5, cello_pred_vgg_cello5_piano1_violin5)

# violin
violin_test_vgg_cello5_flute5_harp2_piano1_sitar1_violin5_voice1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1]
violin_pred_vgg_cello5_flute5_harp2_piano1_sitar1_violin5_voice1 = [0.6001662135124206, 0.6607478052377701, 0.5634933590888977, 0.7609240889549256, 0.8140198171138764,
                     0.5819937348365783, 0.3069789707660675, 0.40791261196136475, 0.3144562641779582, 0.613494313425488,
                     0.47527743875980377, 0.39010757207870483, 0.4429718057314555, 0.3761695126692454,
                     0.8335468709468842, 0.8069558024406434, 0.7599796719021268, 0.7042315602302551, 0.8257697880268097,
                     0.40601093173027036]

#print(len(violin_test_vgg_cello5_flute5_harp2_piano1_sitar1_violin5_voice1))
#print(len(violin_pred_vgg_cello5_flute5_harp2_piano1_sitar1_violin5_voice1))
#RocCurveDisplay.from_predictions(violin_test_vgg_cello5_flute5_harp2_piano1_sitar1_violin5_voice1, 
#                                 violin_pred_vgg_cello5_flute5_harp2_piano1_sitar1_violin5_voice1)


# guitar
guitar_test_cnn_drums1_guitar5_harp5_harpsichord2_sitar2_voice1 =  [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ]
guitar_pred_cnn_drums1_guitar5_harp5_harpsichord2_sitar2_voice1 = [0.31042513251304626, 0.6632554441690445, 0.9159567475318908, 0.768770557641983, 0.8973247408866882,  0.6376360297203064,
                   0.6050231724977493, 0.5084789395332336, 0.598673141002655, 0.6047003328800201, 0.30961257219314575,
                   0.32224079966545105, 0.3470870653788249, 
                   0.3031155467033386, 0.4860559403896332,
                   0.44409154994147165] 
#print(len(guitar_test_cnn_drums1_guitar5_harp5_harpsichord2_sitar2_voice1))
#print(len(guitar_pred_cnn_drums1_guitar5_harp5_harpsichord2_sitar2_voice1))
#RocCurveDisplay.from_predictions(guitar_test_cnn_drums1_guitar5_harp5_harpsichord2_sitar2_voice1, guitar_pred_cnn_drums1_guitar5_harp5_harpsichord2_sitar2_voice1)

plt.show()

count = 0
def plot_roc_curve(y_true_1, y_pred_1, y_true_2, y_pred_2):
  #set up plotting area  
  #plt.figure(count).clf()

  fpr, tpr, _ = metrics.roc_curve(y_true_1, y_pred_1)
  auc = round(metrics.roc_auc_score(y_true_1, y_pred_1), 4)
  plt.plot(fpr,tpr,label="CNN, AUC="+str(auc))
  
  fpr, tpr, _ = metrics.roc_curve(y_true_2, y_pred_2)
  auc = round(metrics.roc_auc_score(y_true_2, y_pred_2), 4)
  plt.plot(fpr,tpr,label="VGG, AUC="+str(auc))
  plt.xlabel("False Positive Rate (Positive label: 1)")
  plt.ylabel("True Positive Rate (Positive label: 1)")
  #add legend
  plt.legend()

plt.figure(count).clf()
plt.title("ROC Curve - Cello")
plot_roc_curve(cello_test_cnn_cello5_piano1_violin5, cello_pred_cnn_cello5_piano1_violin5,
                    cello_test_vgg_cello5_piano1_violin5, cello_pred_vgg_cello5_piano1_violin5 )
count += 1
plt.figure(count).clf()

plt.title("ROC Curve - Violin")
plot_roc_curve(violin_test_cnn_cello5_flute2_harp2_piano1_sitar2_violin5_voice1, violin_pred_cnn_cello5_flute2_harp2_piano1_sitar2_violin5_voice1,
               violin_test_vgg_cello5_flute5_harp2_piano1_sitar1_violin5_voice1, violin_pred_vgg_cello5_flute5_harp2_piano1_sitar1_violin5_voice1)

count += 1
plt.figure(count).clf()

plt.title("ROC Curve - Guitar")
plot_roc_curve(guitar_test_cnn_cello1_guitar5_harp5_harpsichord2_piano1_sitar4_voice1,guitar_pred_cnn_cello1_guitar5_harp5_harpsichord2_piano1_sitar4_voice1 ,
               guitar_test_cnn_drums1_guitar5_harp5_harpsichord2_sitar2_voice1, guitar_pred_cnn_drums1_guitar5_harp5_harpsichord2_sitar2_voice1 )